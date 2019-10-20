import * as Yup from 'yup';
import Customer from '../models/Customer';

class CustomerController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      age: Yup.string().required(),
      weight: Yup.string().required(),
      height: Yup.string().required(),
    })

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails'});
    }

    const customerExists = await Customer.findOne({ where: { email : req.body.email } });

    if(customerExists){
      return res.status(400).json({error: 'Customer already exists.'});
    }

    const { id, name, email, age, weight, height } = await Customer.create(req.body);

    return res.json({
      id,
      name,
      email,
      age,
      weight,
      height
    });
  }

  async index (req,res) {
    return res.json(Customer);
  }

};


export default new CustomerController;
