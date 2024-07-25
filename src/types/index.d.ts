interface BlogDataObject {
    image: string;
    heading: string;
    content: string;
    author: {
        name: string;
        avatar: string;
    }
    createdAt: string;
    likes: number;
}

interface RecentBlogProps {
    data: BlogDataObject[];
}