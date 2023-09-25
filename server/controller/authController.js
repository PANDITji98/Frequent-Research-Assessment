import UserSchema from "../model/auth.js"

export const signUp = async (req, res) => {
  const { firstName, lastName, email, country, state, city, gender, dateOfBirth ,age} = req.body;
  try {
    if (!firstName || !lastName || !email || !country || !state || !city || !gender || !dateOfBirth) {
      return res.status(400).send("Please fill all the details to register");
    }
 
    if(age<14) return res.status(400).send("Age should be greater than 14")
    const existingUser = await UserSchema.findOne({ email: email });

    if (existingUser) {
      return res.status(400).send(`User with email: ${email} already exists`);
    } else {

      const newUser = new UserSchema({
       ...req.body
      });

      await newUser.save();
    }

    return res.status(200).json({ status:"OK",msg: "User registered" });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Some error occurred");
  }
};
