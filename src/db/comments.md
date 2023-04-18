userSchema.pre("save", async function (next) {
const user = this;

    if (!user.isModified("password")) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(user.password, salt);

    user.password = hashedPassword;

    return next();

});

This code is a pre-save middleware function for a Mongoose user schema.
It is called before the "save" method of the schema is executed and performs the following steps:

1- First, it captures the this context as the user instance.
2- It checks if the user's password has been modified since the last save. If not, it calls the next() function to move on to the next middleware in the chain.
If the password has been modified, the function generates a salt of 10 rounds using the bcrypt library.
The function then hashes the user's password using the generated salt using the bcrypt.hash() method.
The hashed password is then assigned to the user's password property.
Finally, the function calls next() to proceed with the save operation.
In summary, this middleware function is used to hash and salt the user's password before it is saved to the database. By using a salt, the function makes it much more difficult for anyone to brute-force the password, adding an additional layer of security.
//-----------------------------------------------------------------------------------------------------------
