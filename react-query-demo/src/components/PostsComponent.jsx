
import React from 'react';
import { useQuery, useQueryClient } from 'react-query';

const PostsComponent = () => {
    const queryClient = useQueryClient();

    const { isLoading, error, data } = useQuery('posts', () =>
        fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
            res.json()
        )
    );

        {
        cacheTime: 5 * 60 * 100,
        staleTime: 30 * 1000,
        refetchOnWindowFocus: true,
        keepPreviousData:true,
    }
    
    const handleRefetch = () => {
        queryClient.invalidateQueries(fetchPosts');
    };

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={handleRefetch}>Refetch Data</button>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;
