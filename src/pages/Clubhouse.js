import { Breadcrumb } from "antd";
import { createUseStyles } from "react-jss";
import { HomeOutlined } from "@ant-design/icons";

const useStyles = createUseStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 24,
  },
});

const Clubhouse = () => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Breadcrumb>
        <Breadcrumb.Item href="/">
          <HomeOutlined /> Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>Clubhouse</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Clubhouse</h1>
      <p>
        The Clubhouse will open soon. Stay tuned and follow our social channels
        for more infos.
      </p>
    </div>
  );
};

export default Clubhouse;
