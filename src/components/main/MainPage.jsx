import React from 'react';
import styles from './MainPage.module.css';

export function MainPage() {
	return (
		<main className={styles.container}>
			<section>
				<h2>Profile</h2>
				<div>
					<img src="#" alt="user background" />
					<article>
						<img src="#" alt="user avatar" />
						<ul>
							<h3>User Name</h3>
							<li>
								Date of Birth:<span></span>
							</li>
							<li>
								Gender:<span></span>
							</li>
							<li>
								Family status:<span></span>
							</li>
							<li>
								Current city:<span></span>
							</li>
						</ul>
					</article>
				</div>
			</section>
			<section>
				<h2>My posts</h2>
				<form id="new-post" action="#" method="get" enctype="text/plain">
					<textarea form="new-post" rows="3" cols="70"></textarea>
					<button form="new-post" type="submit">
						Send
          </button>
				</form>
				<article>
					<h3>user name</h3>
					<aside>
						<img src="#" alt="avatar" />
					</aside>
					<p>I agree, Germany is my favorite country.</p>
					<footer>
						<p>
							Posted on<time datetime="1914-12-20 08:00"> May 17</time>
						</p>
					</footer>
				</article>
			</section>
		</main>
	);
}