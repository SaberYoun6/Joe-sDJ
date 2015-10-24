package joesdj.umass.hack.joesdj;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    Button createRoomBtn;
    Button joinRoomBtn;
    EditText roomCodeText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.content_main);

        createRoomBtn = (Button)findViewById(R.id.createRoomBtn);
        joinRoomBtn = (Button) findViewById(R.id.joinRoomBtn);
        roomCodeText = (EditText) findViewById(R.id.roomCodeText);

        createRoomBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (validateRoomCode(roomCodeText.getText().toString())) {
                    Intent i = new Intent(MainActivity.this, MainRoom.class);
                    startActivity(i);
                }
            }
        });

        joinRoomBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (validateRoomCode(roomCodeText.getText().toString())) {
                    Intent i = new Intent(MainActivity.this, MainRoom.class);
                    startActivity(i);
                }
            }
        });
    }

    public boolean validateRoomCode(String str) {
        if (str.length() != 5) {
            Toast.makeText(getApplicationContext(), "Please enter a valid room code", Toast.LENGTH_SHORT).show();
            return false;
        }
        return true;
    }

    @Override
    public void onBackPressed() {

    }
}
