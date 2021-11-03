// import Query from '../../hooks/useApollo'
import { Card } from 'react-bootstrap'
import Image from 'next/image'
import styles from '../../styles/Blog.module.scss'

export default function BlogCard({ articles }) {


    return(
        <Card style={{ width: '23rem' }}>
            <Image
                src={article.image[0].url}
                alt="blog card image thumbnail"
                width={500}
                height={250}
            />
            <Card.Body> 
                <Card.Title><a className={styles['title']}>{article.title}</a></Card.Title> 
                <Card.Text className={styles['text']}>{article.date}</Card.Text> 
            </Card.Body> 
        </Card>
    )
}