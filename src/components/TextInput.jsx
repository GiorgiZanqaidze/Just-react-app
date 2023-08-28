import { useForm } from "react-hook-form";
export default function TextInput ({  })  {
    const {register, formState: {errors}} = useForm()
    return (
        <input {...register("todoItem", { required: true })} className='border' />
    );
};

