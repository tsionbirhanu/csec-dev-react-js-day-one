// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { FormikProps } from "formik";

// interface IFormInput extends React.InputHTMLAttributes<HTMLInputElement> {
// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	formik: FormikProps<any>;
// 	name: string;
// 	label?: string;
// }

// const FormInput = ({ formik, name, label, ...props }: IFormInput) => {
// 	const { errors, values, touched, handleChange, handleBlur } = formik;

// 	return (
// 		<div className="grid gap-2">
// 			<Label htmlFor={name} aria-required="true" className="capitalize">
// 				{label || name}
// 			</Label>
// 			<Input
// 				id={name}
// 				name={name}
// 				type="text"
// 				placeholder="John"
// 				value={values[name] as string}
// 				onChange={handleChange}
// 				onBlur={handleBlur}
// 				{...props}
// 			/>
// 			{touched[name] && Boolean(errors[name]) && (
// 				<span className="text-sm text-red-500">
// 					{String(errors[name])}
// 				</span>
// 			)}
// 		</div>
// 	);
// };

// export default FormInput;