import { useQuery } from "@apollo/client";

import ProfileBlock from "../components/profile-block/ProfileBlock";

import { QUERY_USERS } from "../utils/queries";

const Users = () => {

    const { loading } = useQuery(QUERY_USERS);

    // const users = data?.users || [];

    return (
        <main>
            <div className="flex-row justify-center">
             {loading ? ( 
                <div className="col-12 col-md-10 my-3">Loading...</div>
             ) : (
                <div 
                    className="col-12 col-md-10mb-3 p-3" style={{ border: '1px dotted #1a1a1a'}}
                >
                    <ProfileBlock />
                </div>
             )}
             


            </div>
        </main>
    );

};

export default Users;