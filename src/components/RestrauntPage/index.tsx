import { useParams } from "react-router";

export const RestaurantPage = () => {
    const {restaurantId} = useParams();

    return(
        <div>{restaurantId}</div>
    )
}