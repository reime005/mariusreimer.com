---
slug: 'rust-graphql-pokeapi'
date: '2021-02-08'
title: 'Svelte with Rust and a GraphQL REST API Wrapper'
description: I show how I created a basic GraphQL Wrapper in Rust for the REST PokeAPI, including a PokeDex website using Svelte
tags: rust, graphql, svelte
cover_image: https://mariusreimer.com/images/rust-graphql-pokeapi-thumb.jpg
---

![Svelte with Rust and GraphQL REST API Wrapper](/images/rust-graphql-pokeapi-hq.jpg)

GraphQL has become a new alternative for developing APIs other than the common REST approach. Being more lightweight by selectively requesting fields (querying) instead of transmitting unnecessary data just makes sense. With these and other benefits there also are disadvantages like the knowledge it requires to maintain, develop or offer such an API (not every customer wants GraphQL).

You can find the source code [on Github](https://github.com/reime005/graphql_pokeapi_rust) and the Svelte PokeDex UI [here](https://graphql-pokeapi-rust.reime005.vercel.app).

What you could do is to add GraphQL to your existing REST API, basically as a thin layer on top of it. This gives you the benefit of being able to use both. Of course, there is also the cost of maintaining both.

I decided to create a GraphQL server for the open source PokeAPI. For that, I've used Rust, with the **Juniper** GraphQL library, with **Actix Web** as a web server implementation. Serialization of objects has been done with **Serde**. The whole thing is a wrapper on top of the pokerust REST client. Lastly, I've built a small web interface with Svelte in form of a PokeDex which displays some basic Pokemon information.

`youtube:https://www.youtube-nocookie.com/embed/RV-8q-AkPd8`

### GraphQL

In GraphQL you have a single endpoint or URL that the client is communicating with. You can enable clients to authenticate, query (**R**ead), mutate (**C**reate, **U**pdate, **D**elete) data and also listen or subscribe to data changes. When the GraphQL server receives a query, it needs to resolve all data that is required. This can happen through different data sources, like a data base or REST api.

From an HTTP layer perspective, GraphQL is usually based on POST and not GET. Reason for that is mostly the limited amount of data that you can send (query) with GET. This also comes with the challenge of no client side caching. You may read more about it in [this article](https://www.apollographql.com/blog/graphql-caching-the-elephant-in-the-room-11a3df0c23ad/).

#### Playground

GraphQL libraries often provide a playground, which is a tool to explore the API with. That is a pretty much self documented way to develop an API, similar to what you might know from the OpenAPI specification. You can explore the whole schema with it and test or execute queries. You can find an example [here](https://graphql-pokeapi.herokuapp.com/graphiql).

### Rust

I chose Rust as a programming language because it aims to deliver high performance and an effective or safe way of memory management. The rough idea is that memory that you use or allocate is managed or freed after specific conditions. These conditions are defined statically on the language level, so that as long as it compiles, memory will usually be safely handled.

One of the best choices for Rust web server libraries currently is **Actix Web**. It provides ways to setup things like CORS and all necessary routes to the GraphQL endpoint. The main endpoint is defined via POST on `/graphql` and the playground via GET on `/graphiql`.

We can also take use of environment variables to change port and ip of the server without recompiling. This is where **Dotenv** can be helpful.

#### Query Example

There are different ways of creating the GraphQL schema. Either schema first, where you directly define the schema or code first, where your schema is generated based on the code that you have written. Juniper uses the **code first schema** approach, but there is an alternative [schema-to-juniper](https://github.com/davidpdrsn/juniper-from-schema) generator.

`gist:reime005/22bd15cb74a651f57df739583a0383bf`

This function translates to the query named `pokemonByName`. However, Juniper provides a way to adjust the final name. This can be useful for example if an object has the field `move`, which is a keyword in the Rust language. As you see in the query, we only want the `height` of the queried pokemon.

`gist:reime005/86b60eef08b0d92d7f40a6a98f8f41e2`

#### Object Conversion Trait

[Traits](https://doc.rust-lang.org/book/ch10-02-traits.html) in Rust are pretty much its way of an interface, so you can specify a set of shared behavior for types with it. Since we are using the pokerust library, we receive objects (structs) that are not fully compatible with Juniper. For example, some data types were `i16` or similar, which are not natural to GraphQL. Basic data types in GraphQL are called [Scalars](https://graphql-rust.github.io/juniper/current/types/scalars.html).

You may create custom scalars for GraphQL with Juniper, but I have decided to just convert them to `String`. This is where the object conversion trait `From<T>` is useful. It allows to implement a type conversion so that you can do the following: `let pokemon = GraphedPokemon::from(pokemon_to_convert)`.

`gist:reime005/2faf777f33f342d0e84fc81fed64d4ac`

### Svelte

In the end, we want to display some data to make use of the GraphQL API. For that, I have decided to use [Svelte](https://svelte.dev) as an alternative approach to React. To me, it felt much more native to "VanillaJS". This is already one of the features of Svelte. Besides that, there is no virtual DOM, so in the end you should have less JavaScript code that needs to do manipulation in the browser.

Code optimization is done at compile time. Also, state management is much simpler, by being reactive itself. Some downsides could be, as with every framework, that is less adopted, less popular and you may find less developers to maintain your code.

Showing Svelte code here would be a bit too much, but the syntax is quite easy to understand.

## Deploying to Heroku

I have used Github Actions as a simple CI/CD. The Rust app is deployed to Heroku via Docker. I have added the `pokeapi` repository as a git submodule and deployed the Python app in the Docker container, too. On start of the container, both server are started and GraphQL server uses the local REST API. For Heroku, you have to make sure that your server's port can be changed via the `PORT` environment variable.

## Conclusion

The technology stack of Juniper and Actix to build a GraphQL server is probably the best way to do it in Rust right now, even though Juniper is still pretty much in development where API changes are common. In practice, you would usually have a database, where [Diesel](http://diesel.rs) is used. The way of creating a GraphQL schema via code is also not always the preferred way. Svelte is interesting to work with, had pretty much no dependencies to install and compiled fast.

Originally published at [https://mariusreimer.com](https://mariusreimer.com) on February 8, 2021.
