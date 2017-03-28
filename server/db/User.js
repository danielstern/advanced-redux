export const users = [];

export const User = (id)=>{
    const user = users.find(user=>user.id===id);
    if (!user) {
        throw new Error(`Could not find user with ID ${id}`);
    }
    return user;
}