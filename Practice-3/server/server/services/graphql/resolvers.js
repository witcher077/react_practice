const db = require('./db');
const rm = require('../../services/require.module')
const { UserInputError, ApolloError, AuthenticationError } = rm.apollo;

const Query = {
    user: async (_, input, context) => {
        if (!context.user) {
            throw new AuthenticationError('User not authorized');
        } else {
            let result = await db.user.details(input);
            if (result.error) {
                throw new UserInputError(result.error.message, {
                    validationErrors: result.error.error || result.error
                });
            } else {
                return result.data;
            }
        }
    },
    users: async (_, __, context) => {
        if (!context.user) {
            throw new AuthenticationError('User not authorized');
        } else {
            let result = await db.user.list();
            if (result.error) {
                throw new ApolloError(result.error.message, '500');
            } else {
                return result.data;
            }
        }
    },
    ideas: async (_, __, context) => {
        if (!context.user) {
            throw new AuthenticationError('User not authorized');
        } else {
            let result = await db.idea.list();
            if (result.error) {
                throw new ApolloError(result.error.message, '500');
            } else {
                return result.data;
            }
        }
    }
};

const Mutation = {
    registerUser: async (_, { input }) => {
        const result = await db.user.register(input)
        if (result.error) {
            if (result.status === 500) {
                throw new ApolloError(result.error.message, '500');
            } else {
                throw new UserInputError(result.error.message, {
                    validationErrors: result.error.error || result.error
                });
            }
        } else {
            return result.data.result.toObject();
        }
    },
    addIdea: async (_, { input }) => {
        const result = await db.idea.add(input)
        if (result.error) {
            if (result.status === 500) {
                throw new ApolloError(result.error.message, '500');
            } else {
                throw new UserInputError(result.error.message, {
                    validationErrors: result.error.error || result.error
                });
            }
        } else {
            return result.data.result.toObject();
        }
    }
}

module.exports = { Query, Mutation };