export default function(context) {
	if (!context.store.getters.isAuthentcated) {
		context.redirect('/admin/auth')
	}
}
