cd
cd Installations/saas_setup/shortcuts/unix
sh tstop.sh

cd
cd codeBase/WaveMaker-Studio-Enterprise/wavemaker-studio
mvn clean install -DskipTests

cd
cd Installations/saas_setup/shortcuts/unix
sh tstart.sh
