import CredentialsProvider from "next-auth/providers/credentials"




export const option = {
  providers: [

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "email" },
        password: { label: "password", type: "password", placeholder: "password" },
      },
      async authorize(credentials) {
        const user = {
          id: "1",
          name: "John Doe",
          email: 'example@gmail.com',
          password: 'password'
        };
        if (credentials.email === user.email && credentials.password === user.password) {
          return user;
        } else {
          return null;
        }
      }
    }),

  ],
  pages: {
    signIn: '/form/login',
  }

};