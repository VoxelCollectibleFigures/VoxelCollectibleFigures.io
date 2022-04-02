import { useMemo } from "react";
import { Alert, Breadcrumb } from "antd";
import { useMoralis } from "react-moralis";
import { createUseStyles } from "react-jss";
import { HomeOutlined } from "@ant-design/icons";

const useStyles = createUseStyles({
  page: {
    justifyContent: "center",
    flexDirection: "column",
  },
});

const Admin = () => {
  const { isAuthenticated, user } = useMoralis();
  const classes = useStyles();

  const whitelist = useMemo(
    () => ["0x09563c28005A18573AD80A5E4ab6e4172dDCf5D7"],
    []
  );

  if (
    !isAuthenticated ||
    !whitelist.includes(user.attributes.ethAddress.toLowerCase())
  ) {
    return (
      <>
        <Alert
          style={{
            maxWidth: 600,
            alignSelf: "center",
          }}
          message="Access only for VoxelCollectibleFigures admins"
          description="Please use the wallet icon in the upper right corner to login with an admin wallet"
          type="warning"
          showIcon
        />
      </>
    );
  }

  return (
    <>
      <div className={classes.page}>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            <HomeOutlined /> Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Claim</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Administration</h1>
        <p>More content coming soon!</p>
      </div>
    </>
  );
};

export default Admin;
