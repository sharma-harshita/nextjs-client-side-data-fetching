For client side data fetching we can directly use useEffect just like we do in React components.
But next.js has come up with  new Hook from its library named SWR (stale while revalidate)
Check dashboard-swr for this hook.

Also if any data gets updated so we do not have to reload the page to check the new data , means when you are using hook the stale will not be there , the page will be updated automatically.