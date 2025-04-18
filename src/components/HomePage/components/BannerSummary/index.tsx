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
          image="../../../../../public/assets/add.png"
          href="/experience/create"
          text="Add an experience"
        />
        <BannerTile
          image="../../../../../public/assets/find.png"
          href="/experiences"
          text="Find an experience"
        />
        <BannerTile
          image="../../../../../public/assets/find.png"
          href="/restaurants"
          text="Find a restaurant"
        />
        <BannerTile
          image="../../../../../public/assets/restaurant.png"
          href="/restaurants/add"
          text="Save a restaurant"
        />
      </div>
    </div>
  );
};
