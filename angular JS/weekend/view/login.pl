<from>
	<table>
		<tr>
			<th colspan="2">LOGIN FORM</th>
		</tr>
		<tr>
			<td>USER ID</td>
			<td><input type="text" ng-model="user.userid"/></td>
		</tr>
		<tr>
			<td>PASSWORD</td></td>
			<td><input type="password" ng-model="user.password"/></td>
		</tr>
		<tr>
			<td align="center" colspan="2">
				<button ng-click="validate()">
					SUBMIT
				</button>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<input type="reset" value="RESET"/>
			</td>
		</tr>
	</table>
</form>