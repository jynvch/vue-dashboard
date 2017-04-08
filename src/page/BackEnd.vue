<template>
	<div>
		<div class="demo-progress">
			<ul>
				<li>
					<strong>137</strong> Unsolved Cases
					<Progress :percent="25"></Progress>
				</li>
				<li>
					<strong>137</strong> Unsolved Cases
					<Progress :percent="25"></Progress>
				</li>
				<li>
					<strong>137</strong> Unsolved Cases
					<Progress :percent="25"></Progress>
				</li>
				<li>
					<strong>137</strong> Unsolved Cases
					<Progress :percent="25"></Progress>
				</li>
				<li>
					<strong>137</strong> Unsolved Cases
					<Progress :percent="25"></Progress>
				</li>
			</ul>
		</div>
		<Row>
			<Col span="8">col-12</Col>
			<Col span="8">col-12</Col>
			<Col span="8">col-12</Col>
		</Row>
	</div>
</template>

<script>
</script>

<style>
	.demo-progress {
		background: #FFFFFF;
		box-shadow: 0 0 10px #ddd;
	}
	.demo-progress ul {
		overflow: hidden;
	}
	.demo-progress li {
		width: 20%;
		float: left;
		border-right: #eee 1px solid;
		padding: 20px;
		min-height: 240px;
	}
	.demo-progress li:last-child {
		border-right: none;
	}
	.demo-progress li strong {
		display: block;
		font-size: 40px;
		line-height: 80px;
	}
</style>