import { BannerTile } from "./BannerTile";

export const BannerSummary = () => {
  //  Make profile call

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Welcome back Sara</h1>
      <div>What would you like to do?</div>
      <div className="banner">
        <BannerTile
          image="https://www.vectorstock.com/royalty-free-vector/icon-black-noodle-vector-15375492"
          href="/"
          text="Add an experience"
        />
        <BannerTile
          image="https://www.vectorstock.com/royalty-free-vector/icon-black-noodle-vector-15375492"
          href="/"
          text="Find an experience"
        />
        <BannerTile
          image="https://www.vectorstock.com/royalty-free-vector/icon-black-noodle-vector-15375492"
          href="/"
          text="Find a restaurant"
        />
        <BannerTile
          image="https://www.vectorstock.com/royalty-free-vector/icon-black-noodle-vector-15375492"
          href="/"
          text="Save a restaurant"
        />
      </div>
    </div>
  );
};
