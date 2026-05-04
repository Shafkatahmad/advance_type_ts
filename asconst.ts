// as const assertion

// enum UserRoles {
//   Admin = 'Admin',
//   Editor = 'Editor',
//   Viewer = 'Viewer'
// }


// const UserRoles = {
//   Admin : 'Admin',
//   Editor : 'Editor',
//   Viewer : 'Viewer'
// } as const;
const UserRoles = {
  Admin : 'ADMIN',
  Editor : 'EDITOR',
  Viewer : 'VIEWER'
} as const;

/*
as we have made our object readonly. now we have to make the keys of this object type.
what converts keys to types? => typeof. So when we will use typeof UserRoles, it will
convert every key as a type and should defined their type as string but it defines their
their types as string literal 'Admin', 'Editor' since the main object is readonly. And
when we will usekeyof typeof UserRoles, It will convert that typeof to union string literal.


typeof UserRoles
{
  Admin : 'Admin',
  Editor : 'Editor',
  Viewer : 'Viewer'
}
  keyof typeof UserRoles
  'Admin' | 'Editor' | 'Viewer'
*/

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if(role === UserRoles.Admin || role === UserRoles.Editor) {
    return true
  }
  else return false;
}

const isEditPermissable = canEdit(UserRoles.Admin);
// const isEditPermissable = canEdit('ADMIN');
console.log(isEditPermissable);