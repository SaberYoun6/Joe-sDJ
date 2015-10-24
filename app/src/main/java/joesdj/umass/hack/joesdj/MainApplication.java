package joesdj.umass.hack.joesdj;

import android.app.Application;

import com.parse.Parse;

/**
 * Created by gilad on 10/24/15.
 */
public class MainApplication extends Application {

    @Override public void onCreate() {
        super.onCreate();

        Parse.enableLocalDatastore(this);
        Parse.initialize(this, "BPTXex94Kp1zPqjQQ5LjWpWgoqoZ3oB3BRkRaTBy", "58vwylBKLnY3T3Ybe0utuoxWqbbjh2n6kqd8ygry");
    }
}