export function AuthMethods() {
	return <p>loginorregister</p>;
}
export function Login() {
	return <form action="/api/signin" method="post">
	<label >Email:</label
	><input
		id="email"
		type="email"
		name="username"
		placeholder="e-mail"
		required
	/>
	<label>Password:</label>
	<input
		type="password"
		name="password"
		placeholder="password"
		id="password"
		required
	/>

	<input type="submit" value="Sign in" />
</form>
}
export function Register() {
	return <p>reg</p>;
}