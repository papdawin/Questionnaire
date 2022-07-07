import React from "react";
import { Routes, Route } from "react-router-dom";
import { About, Contactus, Sitemap, Impressum } from "./Components/About";
import { AuthMethods, Login, Register } from "./Components/Auth";
import Main from "./Components/Main";
import { Pagemissing } from "./Components/Misc";
import Navigation from "./Components/Navigation";
import Quiz from "./Components/quiz/Quiz";
import Quizzes from "./Components/quiz/Quizzes";
import Upload from "./Components/quiz/Upload";
import { Container } from "react-bootstrap";

export default function App() {
	return (
		<>
			<Navigation />
			<Container>
				<Routes>
					<Route index element={<Main />} />
					<Route path="/about">
						<Route index element={<About />} />
						<Route path="contact" element={<Contactus />} />
						<Route path="sitemap" element={<Sitemap />} />
						<Route path="impressum" element={<Impressum />} />
					</Route>
					<Route path="auth">
						<Route index element={<AuthMethods />} />
						<Route path="signin" element={<Login />} />
						<Route path="signup" element={<Register />} />
					</Route>
					<Route path="quiz">
						<Route index element={<Quizzes />} />
						<Route path=":id" element={<Quiz />} />
						<Route path="upload" element={<Upload />} />
					</Route>
					<Route path="*" element={<Pagemissing />} />
				</Routes>
			</Container>
		</>
	);
}
