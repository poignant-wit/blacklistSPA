/**
 * Created by silafm on 18.04.16.
 */

export default (acl) => {
    acl.allow('guest', 'posts', ['view', 'edit']);
    acl.allow('admin', ['posts', 'users'], ['view', 'edit', 'delete']);
}