import { Button } from "antd";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { useMoralis } from "react-moralis";

const useStyles = createUseStyles({
  button: {
    maxWidth: 240,
    alignSelf: "center",
    marginTop: 8,
    marginBottom: 16,
  },
});

const Welcome = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useMoralis();

  const adminAddress = "0x09563c28005A18573AD80A5E4ab6e4172dDCf5D7";

  return (
    <>
      <h1>Welcome to VoxelCollectibleFigures!</h1>
      {isAuthenticated &&
        user.attributes.ethAddress.toLowerCase() === adminAddress && (
          <Button
            danger
            className={classes.button}
            onClick={() => navigate("/admin")}
          >
            Goto Admin Panel
          </Button>
        )}
      <p>
        Voxel collectible figures (VCFs) are digital collectible figures based
        on the voxel art. We start this NFT-Project with the thought of doing
        something good without attracting much attention and having fun at the
        same time. To use the basis of NFTs for this, it was obvious to us to
        collect donations (WWF) and to combine the fun of NFTs and digital
        collectible figures. These digital collectible figures bring together:
        Donations that reduce the fight against growing CO2 emissions, have fun
        with donating for a good case, fun collecting with a new kind of
        figures,trendy voxel art style, cleverly staged figures from all known
        genres and a minimalist design, which turns the contents of any box into
        a new experience.
      </p>
      <Button
        className={classes.button}
        type="primary"
        href="https://opensea.io/VoxelCollectibleFigures"
      >
        View Collection at OpenSea
      </Button>
      <h2>Clubhouse</h2>
      <Button
        className={classes.button}
        type="primary"
        onClick={() => {
          navigate("/claim");
        }}
      >
        Visit the Clubhouse
      </Button>
    </>
  );
};

export default Welcome;
