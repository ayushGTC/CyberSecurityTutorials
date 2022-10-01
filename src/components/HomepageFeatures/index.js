import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// const FeatureList = [
//   {
//     title: 'Easy to Use',
//     Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

// function Feature({Svg, title, description}) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default function HomepageFeatures() {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <h1 className={styles.introHead}>About Me</h1>
      <div className={styles.container}>
        <div className={styles.introDiv}>
          <h2 className={styles.introHead}>Hello 👋 </h2>
          <p className={styles.intro}>
            Myself Devashish aka Deva89. I am from India And I am an CyberSec Engineer
            and Hybrid Application Developer. I have made this project to help the
            community with my personal notes and writeups which I always refer
            during CTF or study.
          </p>
          <p>
            This website contains all my notes and writeups from
            Tryhackme,Hackthebox,Overthewire,Vulnhub and Portswigger CTF
            challenges.
          </p>
          <p>
            You can find all my profiles{" "}
            <a href="https://github.com/devashishpant89" target="_blank">
              Here
            </a>
          </p>
        </div>
        <div>
          <img
            src="img/rick.png"
            alt="Dev"
            className={styles.authorImg}
          />
        </div>
      </div>
    </section>
  );
}
