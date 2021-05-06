addEventListener('fetch', event => {
	event.respondWith(handleEvent(event))
})
async function handleEvent(event) {
	console.log('request happened')
	return new Response('hello world', { status: 200 })
}
