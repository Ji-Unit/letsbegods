-- // For the following table Projects

-- // internal_id   project_name    team_size   team_lead      income
-- // ------------------------------------------------------------------
-- // 1384          MapReduce        100        Jeffrey Dean     0
-- // 2855          Windows          1000       Bill Gates     100500
-- // 5961          Snapchat         3          Evan Spiegel   2000

-- // the resulting table should be:

-- // project_name   team_lead     income
-- // MapReduce      Jeffrey Dean    0
-- // Windows        Bill Gates     100500
-- // Snapchat       Evan Spiegel

-- Create another table by removing the internal_id and team_size columns from the existing Projects table. Return it sorted by internal_id in ascending order.


SELECT project_name, team_lead, income
FROM Projects
ORDER BY internal_id;

