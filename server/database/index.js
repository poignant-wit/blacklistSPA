import mongoose from 'mongoose';

import serverConfig from '../config';

import ACL from 'acl';
import setRoles from '../aclData';

// MongoDB Connection and ACL setup

export default () => {


    mongoose.connect(serverConfig.mongoURL, (error) => {
        if (error) {
            console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
            throw error;
        }

        /*setup node acl*/

        const acl = new ACL(new ACL.mongodbBackend(mongoose.connection.db, 'acl_'));
        setRoles(acl);


        // feed some dummy data in DB.
        //dummyData();
    });


}
