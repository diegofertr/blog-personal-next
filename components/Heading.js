// import styles from '../styles/Home.module.css'
import styles from '../styles/Heading.module.css'

export const Heading = ({ content }) => {

  return (
    <h1 className={styles.myh1}>{ content }</h1>
  )
}


// export async function getStaticProps({ params }) {
//   console.log('Parametros de Heading :: ', params);
//   // const { source, frontmatter } = await getFileBySlug(params.slug)

//   return {
//     props: { title: 'others' },
//   }
// }