update:
	zola build
	rclone sync public/ pine32:domains/pine32.be/public_html