import Head from 'next/head'

type Props = {
    favicon?: string;
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

const DefaultHead = ({
    favicon = '/favicon.ico',
    title = 'Comapany Name',
    description = 'Company description',
    image = '/graph_image.jpeg',
    url = 'https://example.com',
}: Props) => {

    return (
        <>
            <Head>
                <link rel="icon" href={favicon} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:url" content={url} />
            </Head>
        </>
    )
}

export default DefaultHead