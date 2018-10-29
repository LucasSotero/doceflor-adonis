'use strict'

const User = use('App/Models/User')

class UserController {
    async register({ request }){
        const data = request.only(['username','email','password'])
        const user = await User.create(data)

        return user
    }

    async login ({auth, request, response}) {
        const {email, password} = request.all()

        const token = await auth.authenticator('jwt').attempt(email, password);

        return response.send({mgs:'success', token})
    }

    async logout ({auth, response}) {
        const user = await auth.authenticator('jwt').getUser()
        await auth.authenticator('jwt').revokeTokensForUser(user, true)
        await user.save()
        return response.send({msg: 'Logout Successfully'})
    }

    async test ({auth, response}) {
        try {
            await auth.check()
          } catch (error) {
            return response.send({msg: 'error'})
        }

        const user = await auth.getUser()
        return response.send({msg:'success', user})
    }

}

module.exports = UserController
