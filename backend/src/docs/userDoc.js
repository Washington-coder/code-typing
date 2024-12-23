const userDoc = {
    openapi: '3.0.0',
    info: {
        title: 'User\'s API',
        version: '1.0.0',
        description: 'Users API description'
    },
    paths: {
        '/users': {
            get: {
                summary: 'List of users',
                responses: {
                    200: {
                        description: 'Returned users list with success'
                    }
                }
            }
        }
    }
}

export default userDoc;