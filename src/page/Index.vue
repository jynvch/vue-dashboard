<template>
	<div class="layout">
		<Row type="flex">
			<i-col span="4" class="layout-menu-left">
				<Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
					<div class="layout-logo-left">监控系统</div>
					<Submenu name="1">
						<template slot="title">
							<Icon type="ios-navigate"></Icon>
							系统总览
						</template>
						<Menu-item name="1-1">
							<router-link to="BackEnd">资源</router-link>
						</Menu-item>
					</Submenu>
					<Submenu name="2">
						<template slot="title">
							<Icon type="ios-keypad"></Icon>
							监控记录
						</template>
						<Menu-item name="2-1">
							<router-link to="Monitoring/Maps">地图</router-link>
						</Menu-item>
						<Menu-item name="2-2">
							<router-link to="Monitoring/List">列表</router-link>
						</Menu-item>
					</Submenu>
					<Submenu name="3">
						<template slot="title">
							<Icon type="ios-analytics"></Icon>
							分析图表
						</template>
						<Menu-item name="3-1">饼图</Menu-item>
						<Menu-item name="3-2">拆线图</Menu-item>
					</Submenu>
				</Menu>
			</i-col>
			<i-col span="19">
				<div class="layout-header">
					<Icon type="chatbox-working" />
					<Icon type="ios-bell" />
					<Dropdown>
						<a href="javascript:void(0)">
							<img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1031455430,433460733&fm=80&w=179&h=119&img.JPEG" class="head" /> Emma
							<Icon type="arrow-down-b"></Icon>
						</a>
						<Dropdown-menu slot="list">
							<Dropdown-item>个人设置</Dropdown-item>
							<Dropdown-item>
								<router-link to="/">退出登录</router-link>
							</Dropdown-item>
						</Dropdown-menu>
					</Dropdown>
				</div>
				<div class="layout-content">
					<div class="layout-content-main">
						<router-view></router-view>
					</div>
				</div>
				<div class="layout-copy">
					2017 &copy; sim
				</div>
			</i-col>
		</Row>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style>
	.head {
		width: 32px;
		height: 32px;
		border-radius: 16px;
		vertical-align: middle;
	}
	
	html,
	body {
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
	}
	
	.layout {
		border: 1px solid #d7dde4;
		background: #f5f7f9;
		position: relative;
	}
	
	.layout-content {
		min-height: 768px;
		overflow: hidden;
		background: rgb(239, 244, 248);
	}
	
	.layout-content-main {
		padding: 30px;
	}
	
	.layout-copy {
		text-align: center;
		padding: 10px 0 20px;
		color: #9ea7b4;
	}
	
	.layout-menu-left {
		background: #464c5b;
	}
	
	.layout-header {
		height: 60px;
		line-height: 60px;
		background: rgb(1, 0, 40);
		text-align: right;
		padding-right: 30px;
	}
	
	.layout-logo-left {
		width: 90%;
		height: 30px;
		background: #5b6270;
		border-radius: 3px;
		margin: 15px auto;
	}
</style>