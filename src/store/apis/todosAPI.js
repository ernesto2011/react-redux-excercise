import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => `/todos`,
            //transformResponse: (response) => response.data
        }),
        getTodo: builder.query({
            query: (id) => `/todos/${id}`,
        }),
        createTodo: builder.mutation({
            query: (todo) => ({
                url: `/todos`,
                method: 'POST',
                body: JSON.stringify(todo)
            }),
            invalidatesTags: ['todos']
        }),
        updateTodo: builder.mutation({
            query: (updatedTodo) => ({
                url: `/todos/${updatedTodo.id}`,
                method: 'PUT',
                body: JSON.stringify(updatedTodo)
            }),
            invalidatesTags: ['todos']
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['todos']
        })
    })
})

export const { useGetTodosQuery, useGetTodoQuery }= todosApi;