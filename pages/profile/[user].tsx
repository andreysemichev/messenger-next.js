import { useRouter } from "next/router";
import Profile from "components/Profile";
import Header from "components/Header";

const User: React.FC = () => {
    const router = useRouter();
    const userId = router.query.user;

    return (<>
        <Header
            avatarSrc="/images/default_avatar.svg"
            fullName="Joe Black"
        />
        <Profile
            avatarSrc="/images/default_avatar.svg"
            fullName="Joe Black"
            username="joe_black"
            isFollow={true}
            followers={322}
            following={4}
            about="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus incidunt, cumque reprehenderit deleniti, ipsam sit placeat nisi consequuntur delectus consequatur culpa amet vitae aspernatur ullam ea ut dolor, praesentium iste!"
        />
    </>);
}

export default User;