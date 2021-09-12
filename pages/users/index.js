import {Container, Wrapper} from "../../styles/Users.styles";
import Layout from "../../components/Layout";
import UserCard from "../../components/UserCard";
import Search from "../../components/Search";
import Loader from "../../components/Loader";
import {useEffect} from "react";
import useFetch from "../../hooks/useFetch";
import API from "../../API";

export default function Users(props){
    const {scrollHandler,
        data: users,
        fetching,
        setSearchTerm} = useFetch(props.page, props.users, props.totalCount, 'users');

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return () => document.removeEventListener("scroll", scrollHandler);
    }, [scrollHandler]);

    return (
        <Layout>
            <Container>
                <Search setSearchTerm={setSearchTerm}/>
                <Wrapper>
                    {users?.map(user => <UserCard key={user.id} user={user}/>)}
                </Wrapper>
                {fetching && <Loader/>}
            </Container>
        </Layout>
    );
}


export const getServerSideProps = async () => {
    let users = [], totalCount = 0, page = 1;
    await API.getData('users', page).then(res => {
        page += 1;
        totalCount = +res.headers['x-total-count'];
        users = res.data;
    });
    return {
        props: {
            users,
            totalCount,
            page
        }
    };
};