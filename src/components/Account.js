import { useMoralis } from "react-moralis";
import { WalletOutlined } from "@ant-design/icons";

import { Button, message } from "antd";
import Blockie from "./Blockie";
import { createUseStyles } from "react-jss";
import { Menu, Dropdown } from "antd";

const useStyles = createUseStyles({
  account: {
    cursor: "pointer",
    "& button": {
      border: "none",
    },
  },
});

const Account = () => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const classes = useStyles();

  if (!isAuthenticated) {
    return (
      <Button
        size="large"
        shape="circle"
        icon={<WalletOutlined />}
        onClick={async () => {
          try {
            if (typeof window.ethereum !== "undefined") {
              await authenticate({
                signingMessage:
                  "Welcome to the VoxelCollectibleFigures! We will not store any data and just use your signing response to check the ownership of voxel collectible figures.",
              });
            } else {
              await authenticate({
                provider: "walletconnect",
                signingMessage:
                  "Welcome to the VoxelCollectibleFigures! We will not store any data and just use your signing response to check the ownership of voxel collectible figures.",
              });
            }
          } catch (error) {
            message.warn(
              "The login is currently not available. Please check the login on another device, try it again later or/and send a mail to contact@cryptoelephants.club."
            );
          }
        }}
      ></Button>
    );
  }

  const getEllipsisTxt = (str, n = 6) => {
    if (str) {
      return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
    }
    return "";
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={logout} key={0}>
        {`Logout ${getEllipsisTxt(user.attributes.ethAddress)}`}
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={classes.account}>
      <Dropdown.Button
        overlay={menu}
        icon={<Blockie address={user.attributes.ethAddress} scale={4} />}
      />
    </div>
  );
};

export default Account;
