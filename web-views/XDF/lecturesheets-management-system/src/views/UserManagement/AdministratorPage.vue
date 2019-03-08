<template>
  <div id="school-admin">
    <el-button type="success">新增管理员</el-button>
    <el-table
      :data="administratorList"
      style="width: 100%"
      height="85%"
      stripe
      :header-cell-style="{'background-color': '#eef1f6'}"
    >
      <el-table-column label="序号" width="100">
        <template slot-scope="scope">
          <label>{{scope.$index + 1}}</label>
        </template>
      </el-table-column>
      <el-table-column label="工号" prop="employeeId"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="邮箱" prop="email"></el-table-column>
      <el-table-column label="所属校区" prop="shoolArea"></el-table-column>
      <el-table-column label="所属校区">
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="delete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagination.currentPage"
      :page-sizes="pagination.pagesizes"
      :page-size="pagination.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="administratorList.length"
    ></el-pagination>
  </div>
</template>

<script>
import { constant } from "@/common";

export default {
  name: "SchoolAdminPage",
  data() {
    return {
      administratorList: [],
      pagination: {
        currentPage: constant.defaultPager,
        pageSize: constant.defaultPageSize,
        pagesizes: constant.pagesizes
      }
    };
  },
  created() {
    this.render();
  },
  methods: {
    render() {
      this.administratorList = [
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        },
        {
          name: '汤姆·布鲁斯',
          email: '12345@163.com',
          employeeId: '1933330',
          shoolArea: '吴中大厦'
        }
      ]
    },
    // Pagination Functions.
    handleSizeChange: async function(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      // await this.getAdmins();
    },

    handleCurrentChange: async function(index) {
      this.currentPage = index;
      // await this.getAdmins();
    }
  }
};
</script>

<style scoped>
#school-admin {
  height: 98%;
  width: 98%;
  margin: auto;
  margin-top: 2%;
}

</style>