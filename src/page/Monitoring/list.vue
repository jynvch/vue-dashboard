<template>
	<div>
		<h3>在线车辆</h3>
		<Table border :columns="columns1" :data="data1"></Table>
		<Page :total="100" show-elevator></Page>
		<h3>离线车辆</h3>
		<Table border :columns="columns1" :data="data1"></Table>
		<Page :total="100" show-elevator></Page>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				columns1: [{
						title: '姓名',
						key: 'name'
					},
					{
						title: '年龄',
						key: 'age'
					},
					{
						title: '地址',
						key: 'address'
					},
					{
						title: '李达康',
						key: 'tamp'
					}
				],
				data1: [{
						name: '王小明',
						age: 18,
						address: '北京市朝阳区芍药居'
					},
					{
						name: '张小刚',
						age: 25,
						address: '北京市海淀区西二旗'
					},
					{
						name: '李小红',
						age: 30,
						tamp: '我只要ＧＤＰ',
						address: '上海市浦东新区世纪大道'
					},
					{
						name: '周小伟',
						age: 26,
						address: '深圳市南山区深南大道'
					}
				]
			}
		}
	}
</script>

<style>

</style>