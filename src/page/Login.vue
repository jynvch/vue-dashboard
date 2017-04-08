<template>
	<div class="login-form">
		<h3>请登录</h3>
		<Form :model="formItem" :label-width="80">
			<Form-item label="帐号">
				<Input v-model="formItem.loginName" placeholder="请输入"></Input>
			</Form-item>
			<Form-item label="密码">
				<Input v-model="formItem.passWord" placeholder="请输入"></Input>
			</Form-item>
			<Form-item label="">
				<Checkbox-group v-model="formItem.checkbox">
					<Checkbox label="记住我"></Checkbox>
				</Checkbox-group>
			</Form-item>
			<Form-item>
				<Button type="primary" v-on:click="login">登录</Button>
				<Button type="ghost" v-on:click="registr" style="margin-left: 8px">注册</Button>
			</Form-item>
		</Form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				formItem: {
					loginName: '',
					passWord: '',
					checkbox: []
				}
			}
		},
		methods: {
			login: function() {
				this.$Message.info('登录成功');
				this.$router.push('BackEnd')
			},
			registr: function() {
				this.$Notice.open({
					title: '本系统暂时不开放注册',
					desc: '本系统还在调试开发中，暂时不开放注册'
				});
			}
		}
	}
</script>

<style>
	.login-form {
		width: 480px;
		margin: 0 auto;
		background: #FFFFFF;
		box-shadow: 0 0 10px #DDDDDD;
		border-radius: 10px;
		padding: 20px;
		position: relative;
		top: 40px;
	}
	
	.login-form h3 {
		text-align: center;
		padding-bottom: 20px;
	}
</style>