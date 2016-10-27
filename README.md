# Notes
* Used test framework Catch https://github.com/philsquared/Catch
* Contribute tests to the __tests folder
* Deploy with Docker
* Sample request:
```
POST http://54.169.226.33/api/test

user_id: 123
activity_no: basic-cpp/factorial.spec
github_repo: https://github.com/ToanNG/cpp-solutions
```
* Sample response:
```xml
<?xml version="1.1" encoding="UTF-8"?>
<Catch name="factorial.spec">
    <Group name="factorial.spec">
        <TestCase name="Factorials are computed">
            <OverallResult success="true"/>
        </TestCase>
        <OverallResults successes="5" failures="0" expectedFailures="0"/>
    </Group>
    <OverallResults successes="5" failures="0" expectedFailures="0"/>
</Catch>
```
* activity_no should be the path to the test file
