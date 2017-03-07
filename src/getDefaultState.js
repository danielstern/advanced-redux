export const getDefaultState = ()=>({
    user:{
        name:`Gordon Miller`,
        id:`U-1`,
    },
    contacts:[{
        name:`Peter Minuit`,
        id:`U-2`
    },{
        name:`Sam Grunion`,
        id:`U-3`
    }],
    channels:[{
        id:`C-1`,
        name:undefined,
        participants:[`U-1`,`U-3`],
        messages:[{

        }],
        currentUserText:``
    },{
        id:`C-2`,
        name:`Group Chat`,
        participants:[`U-1`,`U-2`,`U-3`],
        messages:[{

        }],
        currentUserText:``
    }],
    activeConversation:`C-1`
});