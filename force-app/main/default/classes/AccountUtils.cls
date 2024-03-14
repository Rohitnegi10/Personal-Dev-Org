public class AccountUtils {
	
    public static List<Account> accountsByState(String BillingStateAbb)
    {
        return [SELECT ID,Name FROM Account Where BillingState = :BillingStateAbb];
    }
}