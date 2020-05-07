export default {
    search: function(search_query, limit) {
        fetch(`http://www.reddit.com/search.json?q=${search_query}`)
            .then((res) => res.json())
            .then((data) => { console.log(data.data.children.map(data => data.data)) })
            .catch((err) => { console.log(err) })
    }
}