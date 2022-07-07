import React from "react";

export default function Main() {
	return (
		<>
			<div>
				<img src="../Files/logo.png" alt="Logo" />
				<div>
					<h2>Intro</h2>
					<p>A quiz application to test yourself at various topics</p>
					<h2>About us</h2>
					<p>
						Welcome to Questionnaire, your number one source for all your
						quizzing needs. We're dedicated to giving you the very best of
						quizzes, with a focus on knowlegde, fun and uniqueness. Founded in
						2021 by papdawin, Questionnaire has come a long way from its
						beginnings in a Cologne Germany. When papdawin first started out,
						his/her passion for helping other knowledge enthusiasts drove him to
						quit his day job, and gave him the impetus to turn hard work and
						inspiration into to a booming online store. We now serve customers
						all over the world, and are thrilled to be a part of the quirky wing
						of the quizzing industry. We hope you enjoy our products as much as
						we enjoy offering them to you. If you have any questions or
						comments, please don't hesitate to contact us.{" "}
						<p>Sincerely, papdawin Chairman of the Supervisory Board</p>
					</p>
				</div>
			</div>
			<ul >
				<li>
					<div id="c1">
						<span>Help us</span>
						<h2>Create your own quiz</h2>
						<p>
							Upload your quiz, and have your friends test it or play with them!
						</p>
						<a href="/upload">QUIZ</a>
					</div>
				</li>
				<li>
					<div id="c2">
						<span>Quiz</span>
						<h2>Take a look out our quizzes</h2>
						<p>
							Have a look at our vast quiz database or search based on category,
							author etc.
						</p>
						<a href="/quiz">Play Now</a>
					</div>
				</li>
				<li>
					<div id="c3">
						<span>Impressum</span>
						<h2>Get to know us</h2>
						<p>Totally legit information about Questionnaire Ltd.</p>
						<a href="/impressum">Click Me!</a>
					</div>
				</li>
			</ul>
		</>
	);
}
