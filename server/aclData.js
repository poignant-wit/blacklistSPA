/**
 * Created by silafm on 18.04.16.
 */

export default (acl) => {
    acl.allow('candidate', 'homepage', ['view']);
    acl.allow('recruiter', 'comments', ['view']);
    acl.allow('admin', ['comments', 'users'], ['view', 'edit', 'delete']);
}